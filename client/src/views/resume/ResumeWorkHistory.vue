<template>
    <section class="history">
        <h2>Work History</h2>
        <ResumeCompany
            v-for="(company, key) in this.companies"
            :company="company"
            :key="key"
        />
    </section>
</template>

<style></style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ResumeCompany from "./ResumeCompany.vue";
import { companies } from "./companies";

@Component({
    components: { ResumeCompany }
})
export default class ResumeWorkHistory extends Vue {
    public companies = companies;
}
</script>
