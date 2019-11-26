<template>
    <section>
        <resume-project
            id="projects"
            v-for="(project, index) in this.projects"
            :project="project"
            :key="index"
        />
    </section>
</template>

<style lang="scss">
#projects article {
    padding-top: 2rem;
    padding-left: 0.5rem;
}

#projects article:first-of-type {
    padding-top: 0.5rem;
}

#projects h3 {
    display: inline-block;
    padding-bottom: 0.3rem;
}

#projects h5 {
    padding-bottom: 0.3rem;
}

#projects a {
    text-decoration: underline;
}
</style>

<script lang="ts">
import ResumeProject from "./ResumeProject.vue";

export default {
    name: "ResumeProjects",
    components: {
        ResumeProject
    },
    data: () => ({
        projects: [
            {
                hero: {
                    src: "/muncher.png",
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
                        src: "/technologies/html.png",
                        name: "HTML"
                    },
                    {
                        src: "/technologies/css.png",
                        name: "CSS"
                    },
                    {
                        src: "/technologies/javascript.svg",
                        name: "JavaScript"
                    },
                    {
                        src: "/technologies/jquery.png",
                        name: "jQuery"
                    },
                    {
                        src: "/technologies/webpack.png",
                        name: "Webpack"
                    },
                    {
                        src: "/technologies/google.png",
                        name: "GCP"
                    }
                ]
            }
        ]
    })
};
</script>
