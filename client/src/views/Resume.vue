<template>
    <div>
        <div class="container">
            <main>
                <ResumeHeader />
                <ResumeSummary />
                <ResumeCertifications />
                <ResumeProjects
                    v-if="this.openSource.length"
                    title="Open-Source Projects"
                    :projects="this.openSource"
                    class="trim-bottom"
                />
                <ResumeProjects
                    v-if="this.closedSource.length"
                    title="Closed-Source Projects"
                    :projects="this.closedSource"
                    class="closed-source on-page-two"
                />
            </main>
            <aside>
                <ResumeEducation class="on-page-two" />
                <ResumeWorkHistory />
            </aside>
        </div>
        <div class="container page-two">
            <main>
                <ResumeHeader />
                <ResumeProjects
                    v-if="this.closedSource.length"
                    title="Closed-Source Projects"
                    :projects="this.closedSource"
                    class="closed-source"
                />
            </main>
            <aside>
                <ResumeEducation />
            </aside>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/components/resume/resumeStyles";

.container {
    background-color: white;
    overflow: hidden;
    position: relative;
    display: flex;
    padding-top: 2rem;
    padding-bottom: 2rem;
}

main {
    overflow: hidden;
    margin-right: -1px;
    border-right: 1px solid rgba(22, 32, 73, 0.75);
}

aside {
    min-width: 19rem;
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
        width: 8.3in;
        height: 11in;
    }

    .container {
        padding-left: 0.2in;
        padding-right: 0.2in;
        padding-bottom: 0.2in;
        padding-top: 0.25in;
        margin: 0 auto;
        overflow: hidden;
        page-break-after: always;
    }

    .on-page-two {
        display: none;
    }

    .page-two {
        background-color: white;
        position: relative;
        box-sizing: border-box;
        display: flex;
        padding-left: 0.2in;
        padding-right: 0.2in;
        padding-bottom: 0.2in;
        padding-top: 0.25in;
        margin: 0 auto;
        overflow: hidden;
    }

    aside {
        min-width: 17rem;
        max-width: 17rem;
    }
}

@media screen {
    .container {
        margin: 0 auto;
        max-width: 55rem;
    }

    main {
        padding-left: 2rem;
    }

    aside {
        padding-right: 2rem;
    }

    .page-two {
        display: none;
    }
}

@media screen and (max-width: 810px) {
    .container {
        display: block;
        padding-left: 4vw;
        padding-right: 4vw;
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

    .page-two {
        display: none;
    }
}

@media screen and (max-width: 480px) {
    .container {
        padding-left: 3vw;
        padding-right: 3vw;
    }

    .page-two {
        display: none;
    }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ResumeHeader from "@/components/resume/ResumeHeader.vue";
import ResumeSummary from "@/components/resume/ResumeSummary.vue";
import ResumeCertifications from "@/components/resume/ResumeCertifications.vue";
import ResumeProjects from "@/components/resume/projects/ResumeProjects.vue";
import ResumeWorkHistory from "@/components/resume/ResumeWorkHistory.vue";
import ResumeEducation from "@/components/resume/ResumeEducation.vue";
import { resumeService } from "@/components/resume/resumeService";

@Component({
    components: {
        ResumeHeader,
        ResumeSummary,
        ResumeCertifications,
        ResumeProjects,
        ResumeWorkHistory,
        ResumeEducation
    }
})
export default class Resume extends Vue {
    public openSource = resumeService.openSource;
    public closedSource = resumeService.closedSource;
}
</script>
