<script setup lang="ts">
    import { Card } from "@/components/ui/card";
    import { Button } from "@/components/ui/button";
    import { Badge } from "@/components/ui/badge";

    const props = defineProps(['course']);
</script>

<template>
    <Card>
        <div class="flex flex-col p-md justify-end gap-md">
            <div class="flex flex-row">
                <h3 class="text-lg w-60">{{ course?.course_name }}</h3>
                <Button variant="outline" class="ml-auto">Añadir</Button>
            </div>
            <div class="flex flex-row gap-1">
                <Badge variant="primary">{{ course?.faculty_name }}</Badge>
                <Badge variant="secondary">{{ course?.pensum_name }}</Badge>
                <Badge variant="secondary">{{ course?.credits }} creditos</Badge>
            </div>
        </div>
    </Card>
</template>