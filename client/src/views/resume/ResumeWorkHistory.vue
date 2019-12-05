<template>
    <section class="aside-section">
        <h2>Work History</h2>
        <ResumeCompany
            class="aside-content"
            v-for="(company, key) in this.companies"
            :company="company"
            :key="key"
        />
    </section>
</template>

<style lang="scss" scoped>
@import "./resumeStyles";
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ResumeCompany from "./ResumeCompany.vue";
import { resumeService } from "./resumeService";

@Component({
    components: { ResumeCompany }
})
export default class ResumeWorkHistory extends Vue {
    public companies = resumeService.companies;
}
</script>
