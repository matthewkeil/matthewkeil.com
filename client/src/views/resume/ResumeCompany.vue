<template>
    <div class="company">
        <h4>{{ this.company.name }}</h4>
        <div :v-if="Array.isArray(this.company.skills)">
            <ul>
                <li
                    v-for="(skill, key) in this.company.skills"
                    class="skills"
                    :key="key"
                >
                    <h6>{{ skill }}</h6>
                </li>
            </ul>
        </div>
        <div :v-if="Array.isArray(this.company.roles)">
            <div
                v-for="({ role, date, description, skills }, key) in this
                    .company.roles"
                :key="key"
            >
                <h5>{{ role }}</h5>
                <h6 class="with-floated-date">
                    {{ description }}
                    <span>{{ date }}</span>
                </h6>
                <ul
                    :v-if="Array.isArray(skills) && skills.length"
                    class="skills list-with-bullets"
                >
                    <li v-for="(skill, key) in skills" :key="key">
                        {{ skill }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
.company {
    position: relative;
    padding-top: 0.5rem;
    padding-bottom: 1rem;
}

.company > div {
    padding-top: 0.5rem;
}

.company p {
    font-size: 0.8rem;
}

.skills li {
    font-size: 0.8rem;
}

.list-with-bullets li {
    position: relative;
    display: block;
    padding-left: 0.6rem;
}

.list-with-bullets li::before {
    content: "-";
    position: absolute;
    left: -0.1rem;
}

h6.with-floated-date {
    display: flex;
}

span {
    text-align: right;
    flex-grow: 1;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Company } from "./companies";

@Component
export default class ResumeCompany extends Vue {
    @Prop() private company!: Company;
}
</script>
