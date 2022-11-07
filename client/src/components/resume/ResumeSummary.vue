<template>
    <section class="main-section">
        <h2>Summary</h2>
        <p class="main-content">{{ this.summary }}</p>
    </section>
</template>

<style lang="scss" scoped>
@import "./resumeStyles";
p {
    font-size: 1.1rem;
}

@media screen and (max-width: 810px) {
    p {
        text-align: center;
    }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { resumeService } from "./resumeService";

@Component
export default class ResumeSummary extends Vue {
    public summary = resumeService.summary;
}
</script>
