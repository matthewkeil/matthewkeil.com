<template>
    <section class="main-section">
        <h2>Summary</h2>
        <p class="main-content">
            I am a classically trained engineer and my computer savvy has been a
            huge boon throughout my career. I am passionate about taking it to
            new heights by becoming the best software engineer I can be. I cut
            my teeth in the construction industry working with others to lead
            large teams of technical and non-technical personnel and I have a
            hands on approach to life that prepares me to work my way up on this
            new path. I am confident that the soft skills I have honed by
            working with others, often through difficult situations, will allow
            me to integrate smoothly on a new team.
        </p>
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
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ResumeSummary extends Vue {}
</script>
