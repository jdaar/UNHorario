<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

</script>

<template>
    <footer class="pt-md flex content-end justify-end">
      <Dialog>
        <DialogTrigger as-child>
          <Button>Añadir curso del indice</Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Catalogo de cursos</DialogTitle>
            <DialogDescription>
              Aqui podras visualizar todos los cursos disponibles en el SIA para la sede Medellin
            </DialogDescription>
          </DialogHeader>
          <div class="flex gap-md"> 
            <Input placeholder="Buscar curso" />
            <Button variant="outline">Buscar</Button>
          </div>
          <div class="flex flex-col pt-md pb-md">
                <div class="grid grid-cols-4 grid-rows-2 gap-md">
                    <Card>
                        <div class="flex flex-col">
                            <h3 class="text-lg">Curso 1</h3>
                            <p class="text-sm">Profesor 1</p>
                            <p class="text-sm">Grupo 1</p>
                        </div>
                    </Card>
                    <Card>
                        <div class="flex flex-col">
                            <h3 class="text-lg">Curso 1</h3>
                            <p class="text-sm">Profesor 1</p>
                            <p class="text-sm">Grupo 1</p>
                        </div>
                    </Card>
                    <Card>
                        <div class="flex flex-col">
                            <h3 class="text-lg">Curso 1</h3>
                            <p class="text-sm">Profesor 1</p>
                            <p class="text-sm">Grupo 1</p>
                        </div>
                    </Card>
                    <Card>
                        <div class="flex flex-col">
                            <h3 class="text-lg">Curso 1</h3>
                            <p class="text-sm">Profesor 1</p>
                            <p class="text-sm">Grupo 1</p>
                        </div>
                    </Card>
                    <Card>
                        <div class="flex flex-col">
                            <h3 class="text-lg">Curso 1</h3>
                            <p class="text-sm">Profesor 1</p>
                            <p class="text-sm">Grupo 1</p>
                        </div>
                    </Card>
                    <Card>
                        <div class="flex flex-col">
                            <h3 class="text-lg">Curso 1</h3>
                            <p class="text-sm">Profesor 1</p>
                            <p class="text-sm">Grupo 1</p>
                        </div>
                    </Card>
                </div>
          </div>
          <DialogFooter>
            <Button variant="outline">
              Añadir curso desde el portapapeles
            </Button>
            <Button type="submit">
              Añadir cursos seleccionados
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> 
    </footer>
</template>