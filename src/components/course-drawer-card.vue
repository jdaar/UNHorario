<script setup lang="ts">
    import { Card } from "@/components/ui/card";
    import { Button } from "@/components/ui/button";
    import { Badge } from "@/components/ui/badge";
    import { supabase } from "@/lib/supabase";
    import { useCourseStore } from "@/stores/course";
    import { useToast } from '@/components/ui/toast';

    const { toast } = useToast()

    const courses = useCourseStore();
    const props = defineProps(['course']);

    async function getCourseById(course_id: number) {
        const result = await supabase.from('Courses').select('*').eq('id', course_id).limit(1).single();
        if (result.error) {
            console.error(result.error);
            return null;
        }
        return result.data;
    }

    async function getGroupsByCourseId(course_id: number) {
        const result = await supabase.from('groupview').select('*').eq('course_id', course_id);
        if (result.error) {
            console.error(result.error);
            return null;
        }
        return result.data;
    }

    async function addToCourseStore() {
        const course = await getCourseById(props.course.course_id);
        if (!course) return;
        const groups = await getGroupsByCourseId(props.course.course_id);
        if (!groups) return;
        const newCourse = {
            ...course,
            groups: groups
        }
        courses.addCourse(newCourse);
        toast({
            title: 'Curso añadido',
            description: 'El curso se ha añadido al calendario',
        })
    }
</script>

<template>
    <Card>
        <div class="flex flex-col p-md justify-end gap-md">
            <div class="flex flex-row">
                <h3 class="text-lg w-60">{{ course?.course_name }}</h3>
                <Button v-on:click="addToCourseStore" variant="outline" class="ml-auto">Añadir</Button>
            </div>
            <div class="flex flex-row gap-1">
                <Badge variant="primary">{{ course?.faculty_name }}</Badge>
                <Badge variant="secondary">{{ course?.pensum_name }}</Badge>
                <Badge variant="secondary">{{ course?.credits }} creditos</Badge>
            </div>
        </div>
    </Card>
</template>