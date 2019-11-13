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

<script>
import ResumeHeader from "@/components/resume/ResumeHeader.vue";

export default {
    name: "Resume",
    components: {
        ResumeHeader
    }
};
</script>