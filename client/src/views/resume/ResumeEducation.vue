<template>
    <section class="education">
        <h2>Education</h2>
        <ResumeInstitution
            v-for="(institution, key) in this.institutions"
            :institution="institution"
            :key="key"
        />
    </section>
</template>

<style scoped></style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ResumeInstitution from "./ResumeInstitution.vue";
import { institutions } from "./institutions";

@Component({
    components: { ResumeInstitution }
})
export default class ResumeEducation extends Vue {
    public institutions = institutions;
}
</script>
