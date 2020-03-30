<template>
    <div class="container">
        <main>
            <resume-header />
            <resume-summary />
            <resume-projects />
        </main>
        <aside>
            <ResumeWorkHistory />
            <ResumeEducation />
        </aside>
    </div>
</template>

<style lang="scss" scoped>
@import "@/components/resume/resumeStyles";

.container {
    background-color: white;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
}

main {
    height: 100%;
    overflow: hidden;
    max-width: 36rem;
    margin-right: -1px;
    border-right: 1px solid rgba(22, 32, 73, 0.75);
}

aside {
    flex-basis: 35%;
    flex-grow: 1;
    height: 100%;
    overflow: hidden;
    border-left: 1px solid rgba(22, 32, 73, 0.75);
}

@page {
    size: letter portrait;
    margin: 0;
}

@media print {
    html,
    body {
        /* background-color: black; */
        width: 8.5in;
        height: 11in;
    }

    .container {
        /* width: 8.5in; */
        /* height: 11in; */
        padding-left: 0.2in;
        padding-right: 0.2in;
        padding-bottom: 0.2in;
        padding-top: 0.25in;
        margin: 0 auto;
    }
}

@media screen {
    .container {
        width: 100vw;
        margin: 0 auto;
        max-width: 8.5in;
    }

    main {
        padding-left: 2rem;
    }

    aside {
        padding-right: 2rem;
    }
}

@media screen and (max-width: 810px) {
    .container {
        display: block;
        padding-left: 8vw;
        padding-right: 8vw;
    }

    main,
    aside {
        padding-left: 0;
        padding-bottom: 0;
        border: none;
        max-width: 100%;
    }

    aside {
        margin-top: 0;
        padding-right: 0;
    }
}

@media screen and (max-width: 480px) {
    .container {
        padding-left: 0;
        padding-right: 0;
    }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ResumeHeader from "@/components/resume/ResumeHeader.vue";
import ResumeSummary from "@/components/resume/ResumeSummary.vue";
import ResumeProjects from "@/components/resume/projects/ResumeProjects.vue";
import ResumeWorkHistory from "@/components/resume/ResumeWorkHistory.vue";
import ResumeEducation from "@/components/resume/ResumeEducation.vue";

@Component({
    components: {
        ResumeHeader,
        ResumeSummary,
        ResumeProjects,
        ResumeWorkHistory,
        ResumeEducation
    }
})
export default class Resume extends Vue {}
</script>
