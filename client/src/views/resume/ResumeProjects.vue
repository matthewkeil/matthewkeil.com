<template>
    <section>
        <resume-project
            v-for="({hero, hostedAt, title, description, skills, stack}, index) of projects"
            :key="index"
            :hero="hero"
            :hostedAt="hostedAt"
            :title="title"
            :description="description"
            :skills="skills"
            :stack="stack"
        />
    </section>
</template>

<style lang="scss" scoped>
</style>

<script>
import ResumeProject from "./ResumeProject.vue";

export default {
    name: "ResumeProjects",
    components: {
        ResumeProject
    },
    data: () => {
        projects: [
            {
                hero: {
                    src: "assets/muncher.png",
                    alt: "number noshers logo"
                },
                hostedAt: "http://noshers.matthewkeil.com",
                title: "Number Noshers",
                description:
                    "Open source clone of the original number munchers game.",
                skills: [
                    "Managing listener clean-up and memory leak detection",
                    "Custom Webpack configuration"
                ],
                stack: [
                    {
                        src: "/assets/technologies/html.png",
                        name: "HTML"
                    },
                    {
                        src: "/assets/technologies/css.png",
                        name: "CSS"
                    },
                    {
                        src: "/assets/technologies/javascript.png",
                        name: "JavaScript"
                    },
                    {
                        src: "/assets/technologies/jquery.png",
                        name: "jQuery"
                    },
                    {
                        src: "/assets/technologies/webpack.png",
                        name: "Webpack"
                    },
                    {
                        src: "/assets/technologies/google.png",
                        name: "GCP"
                    }
                ]
            }
        ];
    }
};
</script>