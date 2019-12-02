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
@import "resumeStyles";

h2 {
    color: $accentColor;
    font-weight: bold;
    font-size: 1.7rem;
    font-variant-caps: small-caps;
}

h3 {
    position: relative;
    font-size: 1.4rem;
    font-weight: bold;
    color: rgb(22, 32, 73);
}

h4 {
    font-size: 1rem;
    font-weight: bold;
    color: rgb(22, 32, 73);
}

h5 {
    font-size: 0.95rem;
    color: rgb(22, 32, 73);
}

h6 {
    font-size: 0.8rem;
}

p {
    font-size: 1.1rem;
}

a {
    text-decoration: none;
}

a:visited,
a:link,
a:hover,
a:active,
a[href^="mailto"] {
    color: rgb(15, 36, 62);
    cursor: pointer;
}

.container {
    background-color: white;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    display: flex;
    width: 100%;
}

main {
    height: 100%;
    overflow: hidden;
    max-width: 36rem;
    margin: 0 auto;
}

aside {
    flex-basis: 35%;
    flex-grow: 1;
    height: 100%;
    overflow: hidden;
    border-left: 1px solid rgba(22, 32, 73, 0.75);
}

main > section > h2,
aside > h2 {
    border-top: 1px solid rgba(22, 32, 73, 0.75);
}

aside h2 {
    padding-left: 1rem;
}

main > section {
    padding-bottom: 1.5rem;
    padding-right: 0.8em;
}

aside > section {
    padding-left: 1rem;
}

aside > h2:first-of-type {
    padding-top: 0;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ResumeHeader from "./ResumeHeader.vue";
import ResumeSummary from "./ResumeSummary.vue";
import ResumeProjects from "./ResumeProjects.vue";
import ResumeWorkHistory from "./ResumeWorkHistory.vue";
import ResumeEducation from "./ResumeEducation.vue";

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
