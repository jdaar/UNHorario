import { expect, test } from "vitest";
import { courseGenerator } from '../src/lib/generator'

const EXPECTED_OUTPUTS = [
    {
        "string": `Logo UniversidadPORTAL DE SERVICIOS ACADÉMICOS
testUser
	Datos personales
 	
	Información académica
 	
	Proceso de inscripción
 	
	Buscador de cursos
 	
Buscador de cursos
Contenido de asignaturas
	Catálogo prog. curriculares
 	
	Información Financiera
 	
	Trámites y solicitudes
 	
	Evaluación docente
 	
Información de la asignatura
 	
 
Volver
SISTEMAS OPERATIVOS (3007867)
Tipología: DISCIPLINAR OBLIGATORIA
Créditos:3
INGENIERÍA DE SISTEMAS E INFORMÁTICA
Facultad: FACULTAD DE MINAS
 
Contenido de la asignatura
 
CLASE TEORICA (3007867)
 
(1) Grupo 1
 
Profesor: Juan Felipe Muñoz Fernandez.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 08:00 a 10:00.
AUDITORIO PETER SANTAMARIA. M8-102. BLOQUE M8. AUDITORIO.
JUEVES de 08:00 a 10:00.
AUDITORIO PETER SANTAMARIA. M8-102. BLOQUE M8. AUDITORIO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 2
Prerrequisitos
Condición 1Tipo M¿Todas? [S]Número asignaturas []
3010426Teoría de lenguajes de programación
Tipo de prerrequisito implica. M - no se puede matricular la asignatura sin superar el prerrequisito. O - podrá matricular, pero no ser calificado sin la superación del prerrequisito. E - o matricula el prerrequisito simultáneamente, o lo ha matriculado alguna vez. A - anulación por incompatibilidad. Si se matricula de las dos asignaturas afectadas por el prerrequisito y no supera la asignatura llave, las asignaturas afectadas por el prerrequisito aparecerán como anuladas.
Volver
 	 	 
Universidad Nacional de Colombia--Dirección Nacional de Información Académica
Portal de Servicios Académicos (V. 4.3.20) |UXXI Todos los derechos reservados`,
        "data":
        {
            "name": "SISTEMAS OPERATIVOS",
            "code": "3007867",
            "credits": 3,
            "type": "Obligatoria",
            "groups": [
                {
                    "name": "(1) Grupo 1",
                    "teacher": " Juan Felipe Muñoz Fernandez",
                    "number": 1,
                    "availablePlaces": 2,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 10,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "4",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 10,
                                "minutes": 0
                            }
                        }
                    ]
                }
            ],
            "selectedGroup": 1,
            "included": true
        },
    },
    {
        "string": `Carga Terminada
Logo UniversidadPORTAL DE SERVICIOS ACADÉMICOS
testUser
	Datos personales
 	
	Información académica
 	
	Proceso de inscripción
 	
	Buscador de cursos
 	
Buscador de cursos
Contenido de asignaturas
	Catálogo prog. curriculares
 	
	Información Financiera
 	
	Trámites y solicitudes
 	
	Evaluación docente
 	
Información de la asignatura
 	
 
Volver
Fundamentos de programación (3010435)
Tipología: DISCIPLINAR OBLIGATORIA
Créditos:3
INGENIERÍA DE SISTEMAS E INFORMÁTICA
Facultad: FACULTAD DE MINAS
 
Contenido de la asignatura
 
CLASE TEORICA (3010435)
 
(1) Grupo 1 MIXTA
 
Profesor: Sebastian Gomez Jaramillo.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 08:00 a 10:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
MARTES de 12:00 a 14:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 3
 
(10) Grupo 10 MIXTA
 
Profesor: Juan Felipe Muñoz Fernandez.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 12:00 a 14:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
JUEVES de 06:00 a 08:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 4
 
(11) Grupo 11 MIXTA
 
Profesor: Juan Felipe Muñoz Fernandez.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 12:00 a 14:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
JUEVES de 08:00 a 10:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 2
 
(12) Grupo 12 MIXTA
 
Profesor: Juan Felipe Muñoz Fernandez.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 12:00 a 14:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
JUEVES de 10:00 a 12:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 0
 
(13) Grupo 13 MIXTA
 
Profesor: Alberto Alejandro Piedrahita Ospina.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 10:00 a 12:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
JUEVES de 12:00 a 14:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 5
 
(14) Grupo 14 MIXTA
 
Profesor: Alberto Alejandro Piedrahita Ospina.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 10:00 a 12:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
JUEVES de 14:00 a 16:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 3
 
(15) Grupo 15 MIXTA
 
Profesor: Alberto Alejandro Piedrahita Ospina.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 10:00 a 12:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
JUEVES de 16:00 a 18:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 1
 
(16) Grupo 16 MIXTA
 
Profesor: Alberto Alejandro Piedrahita Ospina.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 10:00 a 12:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
VIERNES de 06:00 a 08:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 6
 
(17) Grupo 17 MIXTA
 
Profesor: Alberto Alejandro Piedrahita Ospina.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 10:00 a 12:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
VIERNES de 08:00 a 10:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 2
 
(18) Grupo 18 MIXTA
 
Profesor: Alberto Alejandro Piedrahita Ospina.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 10:00 a 12:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
VIERNES de 10:00 a 12:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 2
 
(19) Grupo 19 MIXTA
 
Profesor: Miguel De Jesus Pinto Herrera.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 16:00 a 18:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
VIERNES de 12:00 a 14:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 3
 
(2) Grupo 2 MIXTA
 
Profesor: Sebastian Gomez Jaramillo.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 08:00 a 10:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
MARTES de 14:00 a 16:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 1
 
(20) Grupo 20 MIXTA
 
Profesor: Miguel De Jesus Pinto Herrera.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 16:00 a 18:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
VIERNES de 14:00 a 16:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 5
 
(21) Grupo 21 MIXTA
 
Profesor: Miguel De Jesus Pinto Herrera.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 16:00 a 18:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
VIERNES de 16:00 a 18:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 4
 
(22) Grupo 22 MIXTA
 
Profesor: Miguel De Jesus Pinto Herrera.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 16:00 a 18:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
MIÉRCOLES de 10:00 a 12:00.
SALA DE CÓMPUTO. 04-204. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 5
 
(23) Grupo 23 MIXTA
 
Profesor: Miguel De Jesus Pinto Herrera.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 16:00 a 18:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
MIÉRCOLES de 12:00 a 14:00.
SALA DE CÓMPUTO. 04-204. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 3
 
(24) Grupo 24 MIXTA
 
Profesor: Miguel De Jesus Pinto Herrera.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 16:00 a 18:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
MIÉRCOLES de 14:00 a 16:00.
SALA DE CÓMPUTO. 04-204. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 6
 
(25) Grupo 25 MIXTA
 
Profesor: Nelson David Zapata Osorio.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 14:00 a 16:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
JUEVES de 12:00 a 14:00.
SALA DE CÓMPUTO. 04-204. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 0
 
(26) Grupo 26 MIXTA
 
Profesor: Nelson David Zapata Osorio.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 14:00 a 16:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
JUEVES de 14:00 a 16:00.
SALA DE CÓMPUTO. 04-204. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 2
 
(27) Grupo 27 MIXTA
 
Profesor: Nelson David Zapata Osorio.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 14:00 a 16:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
JUEVES de 16:00 a 18:00.
SALA DE CÓMPUTO. 04-204. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 6
 
(28) Grupo 28 MIXTA
 
Profesor: Nelson David Zapata Osorio.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 14:00 a 16:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
VIERNES de 08:00 a 10:00.
SALA DE CÓMPUTO. 04-204. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 1
 
(29) Grupo 29 MIXTA
 
Profesor: Nelson David Zapata Osorio.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 14:00 a 16:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
VIERNES de 10:00 a 12:00.
SALA DE CÓMPUTO. 04-204. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 6
 
(3) Grupo 3 MIXTA
 
Profesor: Sebastian Gomez Jaramillo.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 08:00 a 10:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
MARTES de 16:00 a 18:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 5
 
(30) Grupo 30 MIXTA
 
Profesor: Nelson David Zapata Osorio.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 14:00 a 16:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
VIERNES de 12:00 a 14:00.
SALA DE CÓMPUTO. 04-204. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 4
 
(32) Grupo 32 MIXTA
 
Profesor: Nelson David Zapata Osorio.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 18:00 a 20:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
MIÉRCOLES de 18:00 a 20:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 4
 
(33) Grupo 33 MIXTA
 
Profesor: Nelson David Zapata Osorio.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 18:00 a 20:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
JUEVES de 18:00 a 20:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 0
 
(34) Grupo 34 MIXTA
 
Profesor: Nelson David Zapata Osorio.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 18:00 a 20:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
VIERNES de 18:00 a 20:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 14
 
(4) Grupo 4 MIXTA
 
Profesor: Sebastian Gomez Jaramillo.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 08:00 a 10:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
MIÉRCOLES de 06:00 a 08:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 4
 
(5) Grupo 5 MIXTA
 
Profesor: Sebastian Gomez Jaramillo.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 08:00 a 10:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
MIÉRCOLES de 08:00 a 10:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 0
 
(6) Grupo 6 MIXTA
 
Profesor: Sebastian Gomez Jaramillo.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 08:00 a 10:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
MIÉRCOLES de 10:00 a 12:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 1
 
(7) Grupo 7 MIXTA
 
Profesor: Juan Felipe Muñoz Fernandez.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 12:00 a 14:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
MIÉRCOLES de 12:00 a 14:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 3
 
(8) Grupo 8 MIXTA
 
Profesor: Juan Felipe Muñoz Fernandez.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 12:00 a 14:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
MIÉRCOLES de 14:00 a 16:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 1
 
(9) Grupo 9 MIXTA
 
Profesor: Juan Felipe Muñoz Fernandez.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 12:00 a 14:00.
Cursos Dirigidos o virtuales de la Sede. Virtual-4. Aulas virtuales. SALA DE INFORMATICA O DE COMPUTO.
MIÉRCOLES de 16:00 a 18:00.
SALA DE CÓMPUTO. 04-205. BLOQUE 04. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 3
 
(CARI-01) Peama - Caribe Grupo 01
 
Profesor: Johannie Lucia James Cruz.
Facultad: SEDE CARIBE
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MIÉRCOLES de 11:00 a 13:00.
VIERNES de 11:00 a 13:00.
SALA DE COMPUTO. 239-103B. FILOSOFIA. SALA DE INFORMATICA Y/O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 20
 
(ORIN-01) Peama - Orinoquia Grupo 01 (Telepresencial)
 
Profesor: Oswaldo Rojas Camacho.
Facultad: SEDE ORINOQUIA
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
LUNES de 11:00 a 13:00.
MIÉRCOLES de 11:00 a 13:00.
AULA DE INFORMATICA No. 2. 9. AULAS DE CLASE. .
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 5
 
(TUMA-01) Peama - Tumaco Grupo 01
 
Profesor: Edgar Joany Vargas Florez.
Facultad: SEDE TUMACO
Horarios/Aula: No informado
Fecha:15/08/2022 - 19/08/2022
LUNES de 08:00 a 13:30.
AULA 6 - SALA DE INFORMATICA. 06. EDIFICIO ADMINISTRATIVO. SALON.
MARTES de 08:00 a 13:30.
AULA 6 - SALA DE INFORMATICA. 06. EDIFICIO ADMINISTRATIVO. SALON.
MIÉRCOLES de 08:00 a 13:00.
AULA 6 - SALA DE INFORMATICA. 06. EDIFICIO ADMINISTRATIVO. SALON.
Fecha:12/09/2022 - 16/09/2022
LUNES de 08:00 a 13:30.
AULA 6 - SALA DE INFORMATICA. 06. EDIFICIO ADMINISTRATIVO. SALON.
MARTES de 08:00 a 13:30.
AULA 6 - SALA DE INFORMATICA. 06. EDIFICIO ADMINISTRATIVO. SALON.
MIÉRCOLES de 08:00 a 13:00.
AULA 6 - SALA DE INFORMATICA. 06. EDIFICIO ADMINISTRATIVO. SALON.
Fecha:17/10/2022 - 21/10/2022
LUNES de 08:00 a 13:30.
AULA 6 - SALA DE INFORMATICA. 06. EDIFICIO ADMINISTRATIVO. SALON.
MARTES de 08:00 a 13:30.
AULA 6 - SALA DE INFORMATICA. 06. EDIFICIO ADMINISTRATIVO. SALON.
MIÉRCOLES de 08:00 a 13:00.
AULA 6 - SALA DE INFORMATICA. 06. EDIFICIO ADMINISTRATIVO. SALON.
Fecha:14/11/2022 - 18/11/2022
LUNES de 08:00 a 13:30.
AULA 6 - SALA DE INFORMATICA. 06. EDIFICIO ADMINISTRATIVO. SALON.
MARTES de 08:00 a 13:30.
AULA 6 - SALA DE INFORMATICA. 06. EDIFICIO ADMINISTRATIVO. SALON.
MIÉRCOLES de 08:00 a 13:00.
AULA 6 - SALA DE INFORMATICA. 06. EDIFICIO ADMINISTRATIVO. SALON.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 6
Volver
 	 	 
Universidad Nacional de Colombia--Dirección Nacional de Información Académica
Portal de Servicios Académicos (V. 4.3.20) |UXXI Todos los derechos reservados`,
        "data": {
            "name": "Fundamentos de programación",
            "code": "3010435",
            "credits": 3,
            "type": "Obligatoria",
            "groups": [
                {
                    "name": "(1) Grupo 1 MIXTA",
                    "teacher": " Sebastian Gomez Jaramillo",
                    "number": 1,
                    "availablePlaces": 3,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 10,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "2",
                            "start": {
                                "hours": 12,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 14,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(10) Grupo 10 MIXTA",
                    "teacher": " Juan Felipe Muñoz Fernandez",
                    "number": 2,
                    "availablePlaces": 4,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 12,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 14,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "4",
                            "start": {
                                "hours": 6,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 8,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(11) Grupo 11 MIXTA",
                    "teacher": " Juan Felipe Muñoz Fernandez",
                    "number": 3,
                    "availablePlaces": 2,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 12,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 14,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "4",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 10,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(12) Grupo 12 MIXTA",
                    "teacher": " Juan Felipe Muñoz Fernandez",
                    "number": 4,
                    "availablePlaces": 0,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 12,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 14,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "4",
                            "start": {
                                "hours": 10,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 12,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(13) Grupo 13 MIXTA",
                    "teacher": " Alberto Alejandro Piedrahita Ospina",
                    "number": 5,
                    "availablePlaces": 5,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 10,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 12,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "4",
                            "start": {
                                "hours": 12,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 14,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(14) Grupo 14 MIXTA",
                    "teacher": " Alberto Alejandro Piedrahita Ospina",
                    "number": 6,
                    "availablePlaces": 3,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 10,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 12,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "4",
                            "start": {
                                "hours": 14,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 16,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(15) Grupo 15 MIXTA",
                    "teacher": " Alberto Alejandro Piedrahita Ospina",
                    "number": 7,
                    "availablePlaces": 1,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 10,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 12,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "4",
                            "start": {
                                "hours": 16,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 18,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(16) Grupo 16 MIXTA",
                    "teacher": " Alberto Alejandro Piedrahita Ospina",
                    "number": 8,
                    "availablePlaces": 6,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 10,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 12,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "5",
                            "start": {
                                "hours": 6,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 8,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(17) Grupo 17 MIXTA",
                    "teacher": " Alberto Alejandro Piedrahita Ospina",
                    "number": 9,
                    "availablePlaces": 2,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 10,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 12,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "5",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 10,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(18) Grupo 18 MIXTA",
                    "teacher": " Alberto Alejandro Piedrahita Ospina",
                    "number": 10,
                    "availablePlaces": 2,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 10,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 12,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "5",
                            "start": {
                                "hours": 10,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 12,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(19) Grupo 19 MIXTA",
                    "teacher": " Miguel De Jesus Pinto Herrera",
                    "number": 11,
                    "availablePlaces": 3,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 16,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 18,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "5",
                            "start": {
                                "hours": 12,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 14,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(2) Grupo 2 MIXTA",
                    "teacher": " Sebastian Gomez Jaramillo",
                    "number": 12,
                    "availablePlaces": 1,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 10,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "2",
                            "start": {
                                "hours": 14,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 16,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(20) Grupo 20 MIXTA",
                    "teacher": " Miguel De Jesus Pinto Herrera",
                    "number": 13,
                    "availablePlaces": 5,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 16,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 18,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "5",
                            "start": {
                                "hours": 14,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 16,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(21) Grupo 21 MIXTA",
                    "teacher": " Miguel De Jesus Pinto Herrera",
                    "number": 14,
                    "availablePlaces": 4,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 16,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 18,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "5",
                            "start": {
                                "hours": 16,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 18,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(22) Grupo 22 MIXTA",
                    "teacher": " Miguel De Jesus Pinto Herrera",
                    "number": 15,
                    "availablePlaces": 5,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 16,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 18,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "3",
                            "start": {
                                "hours": 10,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 12,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(23) Grupo 23 MIXTA",
                    "teacher": " Miguel De Jesus Pinto Herrera",
                    "number": 16,
                    "availablePlaces": 3,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 16,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 18,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "3",
                            "start": {
                                "hours": 12,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 14,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(24) Grupo 24 MIXTA",
                    "teacher": " Miguel De Jesus Pinto Herrera",
                    "number": 17,
                    "availablePlaces": 6,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 16,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 18,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "3",
                            "start": {
                                "hours": 14,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 16,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(25) Grupo 25 MIXTA",
                    "teacher": " Nelson David Zapata Osorio",
                    "number": 18,
                    "availablePlaces": 0,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 14,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 16,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "4",
                            "start": {
                                "hours": 12,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 14,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(26) Grupo 26 MIXTA",
                    "teacher": " Nelson David Zapata Osorio",
                    "number": 19,
                    "availablePlaces": 2,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 14,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 16,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "4",
                            "start": {
                                "hours": 14,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 16,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(27) Grupo 27 MIXTA",
                    "teacher": " Nelson David Zapata Osorio",
                    "number": 20,
                    "availablePlaces": 6,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 14,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 16,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "4",
                            "start": {
                                "hours": 16,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 18,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(28) Grupo 28 MIXTA",
                    "teacher": " Nelson David Zapata Osorio",
                    "number": 21,
                    "availablePlaces": 1,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 14,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 16,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "5",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 10,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(29) Grupo 29 MIXTA",
                    "teacher": " Nelson David Zapata Osorio",
                    "number": 22,
                    "availablePlaces": 6,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 14,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 16,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "5",
                            "start": {
                                "hours": 10,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 12,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(3) Grupo 3 MIXTA",
                    "teacher": " Sebastian Gomez Jaramillo",
                    "number": 23,
                    "availablePlaces": 5,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 10,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "2",
                            "start": {
                                "hours": 16,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 18,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(30) Grupo 30 MIXTA",
                    "teacher": " Nelson David Zapata Osorio",
                    "number": 24,
                    "availablePlaces": 4,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 14,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 16,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "5",
                            "start": {
                                "hours": 12,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 14,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(32) Grupo 32 MIXTA",
                    "teacher": " Nelson David Zapata Osorio",
                    "number": 25,
                    "availablePlaces": 4,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 18,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 20,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "3",
                            "start": {
                                "hours": 18,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 20,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(33) Grupo 33 MIXTA",
                    "teacher": " Nelson David Zapata Osorio",
                    "number": 26,
                    "availablePlaces": 0,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 18,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 20,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "4",
                            "start": {
                                "hours": 18,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 20,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(34) Grupo 34 MIXTA",
                    "teacher": " Nelson David Zapata Osorio",
                    "number": 27,
                    "availablePlaces": 14,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 18,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 20,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "5",
                            "start": {
                                "hours": 18,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 20,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(4) Grupo 4 MIXTA",
                    "teacher": " Sebastian Gomez Jaramillo",
                    "number": 28,
                    "availablePlaces": 4,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 10,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "3",
                            "start": {
                                "hours": 6,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 8,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(5) Grupo 5 MIXTA",
                    "teacher": " Sebastian Gomez Jaramillo",
                    "number": 29,
                    "availablePlaces": 0,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 10,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "3",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 10,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(6) Grupo 6 MIXTA",
                    "teacher": " Sebastian Gomez Jaramillo",
                    "number": 30,
                    "availablePlaces": 1,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 10,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "3",
                            "start": {
                                "hours": 10,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 12,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(7) Grupo 7 MIXTA",
                    "teacher": " Juan Felipe Muñoz Fernandez",
                    "number": 31,
                    "availablePlaces": 3,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 12,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 14,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "3",
                            "start": {
                                "hours": 12,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 14,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(8) Grupo 8 MIXTA",
                    "teacher": " Juan Felipe Muñoz Fernandez",
                    "number": 32,
                    "availablePlaces": 1,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 12,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 14,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "3",
                            "start": {
                                "hours": 14,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 16,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(9) Grupo 9 MIXTA",
                    "teacher": " Juan Felipe Muñoz Fernandez",
                    "number": 33,
                    "availablePlaces": 3,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 12,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 14,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "3",
                            "start": {
                                "hours": 16,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 18,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(CARI-01) Peama - Caribe Grupo 01",
                    "teacher": " Johannie Lucia James Cruz",
                    "number": 34,
                    "availablePlaces": 20,
                    "lectures": [
                        {
                            "day": "3",
                            "start": {
                                "hours": 11,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 13,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "5",
                            "start": {
                                "hours": 11,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 13,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(ORIN-01) Peama - Orinoquia Grupo 01 (Telepresencial)",
                    "teacher": " Oswaldo Rojas Camacho",
                    "number": 35,
                    "availablePlaces": 5,
                    "lectures": [
                        {
                            "day": "1",
                            "start": {
                                "hours": 11,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 13,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "3",
                            "start": {
                                "hours": 11,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 13,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(TUMA-01) Peama - Tumaco Grupo 01",
                    "teacher": " Edgar Joany Vargas Florez",
                    "number": 36,
                    "availablePlaces": 6,
                    "lectures": [
                        {
                            "day": "1",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 13,
                                "minutes": 30
                            }
                        },
                        {
                            "day": "2",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 13,
                                "minutes": 30
                            }
                        },
                        {
                            "day": "3",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 13,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "1",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 13,
                                "minutes": 30
                            }
                        },
                        {
                            "day": "2",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 13,
                                "minutes": 30
                            }
                        },
                        {
                            "day": "3",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 13,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "1",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 13,
                                "minutes": 30
                            }
                        },
                        {
                            "day": "2",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 13,
                                "minutes": 30
                            }
                        },
                        {
                            "day": "3",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 13,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "1",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 13,
                                "minutes": 30
                            }
                        },
                        {
                            "day": "2",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 13,
                                "minutes": 30
                            }
                        },
                        {
                            "day": "3",
                            "start": {
                                "hours": 8,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 13,
                                "minutes": 0
                            }
                        }
                    ]
                }
            ],
            "selectedGroup": 1,
            "included": true
        }
    },
    {
        "string": `Logo UniversidadPORTAL DE SERVICIOS ACADÉMICOS
testUser
	Datos personales
 	
	Información académica
 	
	Proceso de inscripción
 	
	Buscador de cursos
 	
	Catálogo prog. curriculares
 	
	Información Financiera
 	
	Trámites y solicitudes
 	
	Evaluación docente
 	
Información de la asignatura
 	
 
Volver
SIMULACIÓN DE SISTEMAS (3007331)
Tipología: DISCIPLINAR OBLIGATORIA
Créditos:3
INGENIERÍA DE SISTEMAS E INFORMÁTICA
Facultad: FACULTAD DE MINAS
 
Contenido de la asignatura
 
CLASE TEORICA-PRACTICA (3007331)
 
(1) Grupo 1
 
Profesor: Yris Olaya Morales.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 14:00 a 16:00.
AUDITORIO PETER SANTAMARIA. M8-102. BLOQUE M8. AUDITORIO.
MIÉRCOLES de 14:00 a 16:00.
SALA DE CÓMPUTO. M7-502B. BLOQUE M7. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 1
 
(2) Grupo 2
 
Profesor: Yris Olaya Morales.
Facultad:
Horarios/Aula: No informado
Fecha:08/08/2022 - 03/12/2022
MARTES de 14:00 a 16:00.
AUDITORIO PETER SANTAMARIA. M8-102. BLOQUE M8. AUDITORIO.
VIERNES de 14:00 a 16:00.
SALA DE CÓMPUTO. M7-502B. BLOQUE M7. SALA DE INFORMATICA O DE COMPUTO.
Duración: Semestral
Jornada: DIURNO
Cupos disponibles: 2
Prerrequisitos
Condición 1Tipo M¿Todas? [S]Número asignaturas []
3007324INVESTIGACIÓN DE OPERACIONES I
Condición 3Tipo M¿Todas? [N]Número asignaturas [1]
3006914ESTADÍSTICA I
3010651Estadística I
Tipo de prerrequisito implica. M - no se puede matricular la asignatura sin superar el prerrequisito. O - podrá matricular, pero no ser calificado sin la superación del prerrequisito. E - o matricula el prerrequisito simultáneamente, o lo ha matriculado alguna vez. A - anulación por incompatibilidad. Si se matricula de las dos asignaturas afectadas por el prerrequisito y no supera la asignatura llave, las asignaturas afectadas por el prerrequisito aparecerán como anuladas.
Volver
 	 	 
Universidad Nacional de Colombia--Dirección Nacional de Información Académica
Portal de Servicios Académicos (V. 4.3.20) |UXXI Todos los derechos reservados`,
        "data": {
            "name": "SIMULACIÓN DE SISTEMAS",
            "code": "3007331",
            "credits": 3,
            "type": "Obligatoria",
            "groups": [
                {
                    "name": "(1) Grupo 1",
                    "teacher": " Yris Olaya Morales",
                    "number": 1,
                    "availablePlaces": 1,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 14,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 16,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "3",
                            "start": {
                                "hours": 14,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 16,
                                "minutes": 0
                            }
                        }
                    ]
                },
                {
                    "name": "(2) Grupo 2",
                    "teacher": " Yris Olaya Morales",
                    "number": 2,
                    "availablePlaces": 2,
                    "lectures": [
                        {
                            "day": "2",
                            "start": {
                                "hours": 14,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 16,
                                "minutes": 0
                            }
                        },
                        {
                            "day": "5",
                            "start": {
                                "hours": 14,
                                "minutes": 0
                            },
                            "end": {
                                "hours": 16,
                                "minutes": 0
                            }
                        }
                    ]
                }
            ],
            "selectedGroup": 1,
            "included": true
        }
    },
]

for (let i = 0; i < EXPECTED_OUTPUTS.length; i++) {
    test(`It should generate course #${i} correctly`, () => {
            expect(JSON.stringify(courseGenerator(EXPECTED_OUTPUTS[i].string))).toMatchObject(JSON.stringify(EXPECTED_OUTPUTS[i].data))
    })
}