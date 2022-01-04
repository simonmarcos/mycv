import { WorksType } from "./types/types";

const dataResponse: Array<WorksType> = [
    {
        title: 'FULL STACK NODE JS Y REACT JS – CONNECTIS ICT SERVICE',
        duration: 'Junio 2021 – Actualidad',
        description: `Experiencia en el desarrollo de Microservicios con NodeJs 
        (express, axios, swagger), React (con framework NextJs), test unitarios con Jest y Enzyme. 
        Desarrollo de librería de componentes, accesibilidad web. 
        Manejo de Openshift para el despliegue de las aplicaciones. Metodologías ágiles.`
    },
    {
        title: 'FULL STACK – JAVA Y REACT JS - PRACTIA',
        duration: 'Octubre 2020 – Junio 2021',
        description: `Experiencia en el desarrollo de servicios REST con Spring Boot, Hibernate,
        HQL, JPA. Generación de reporte con JasperReport.
        React JS con componentes funcionales y Hooks, Material UI, Axios. Git,
        Jira, Jenkins.
        `
    },
    {
        title: 'RPA DEVELOPER - PRACTIA',
        duration: 'Septiembre 2018 – Septiembre 2020',
        description: `Experiencia en tareas de análisis, diseño y desarrollo en automatización de
        procesos con la tecnología UIPath.
        Entre los diversos proyectos se trabajó con: Base de datos Oracle,
        interacciones son SAP, Excel, aplicaciones propias del cliente, manejo de
        Orquestador, Api Rest, SSH.`
    },
    {
        title: 'PROYECTOS INDEPENDIENTES',
        description: "Sistema de escritorio desarrollado en JAVA y MYSQL para la gestión de clientes, empleados y ganancias con sistema de reportes e informes para una Barbería. Sistema de escritorio desarrollado en JAVA y MYSQL para la gestión de los empleados para una PIME de marketing promocional"
    }
]

const worksService = {

    getMyWorks: () => {
        //return fetchApiEffect('', 'GET');
        return {
            error: null,
            data: dataResponse,
            loading: false,
        }
    }
}

export default worksService;