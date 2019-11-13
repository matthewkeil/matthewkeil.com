<template>
    <div>
        <main>
            <resume-header />
            <resume-summary />
            <resume-projects />
        </main>
        <aside></aside>
    </div>
</template>

<script lang="ts">
import ResumeHeader from "./ResumeHeader.vue";
import ResumeSummary from "./ResumeSummary.vue";
import ResumeProjects from "./ResumeProjects.vue";

export default {
    name: "resume",
    components: {
        ResumeHeader,
        ResumeSummary,
        ResumeProjects
    }
};
</script>
