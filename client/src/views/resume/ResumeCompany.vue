<template>
    <div class="company">
        <h4>{{ this.company.name }}</h4>
        <div :v-if="hasSkills" :class="{ 'has-skills': hasSkills }">
            <ul>
                <li v-for="(skill, key) in this.company.skills" :key="key">
                    <h6>{{ skill }}</h6>
                </li>
            </ul>
        </div>
        <div :v-if="hasRoles">
            <div
                v-for="({ role, date, description, skills }, key) in this
                    .company.roles"
                :key="key"
                :class="{ 'has-roles': hasRoles }"
            >
                <h5>{{ role }}</h5>
                <h6 class="with-floated-span">
                    {{ description }}
                    <span>{{ date }}</span>
                </h6>
                <ul :v-if="Array.isArray(skills) && skills.length">
                    <li
                        v-for="(skill, key) in skills"
                        :key="key"
                        class="bulleted"
                    >
                        {{ skill }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "./resumeStyles";

.company {
    position: relative;
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    .has-skills,
    .has-roles {
        padding-top: 0.5rem;
    }
}

p {
    font-size: 0.8rem;
}

li {
    font-size: 0.8rem;
}

.bulleted {
    position: relative;
    display: block;
    padding-left: 0.6rem;
    &::before {
        content: "-";
        position: absolute;
        left: -0.1rem;
    }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Company } from "./Company";

@Component
export default class ResumeCompany extends Vue {
    @Prop() private company!: Company;

    private get hasSkills() {
        return Array.isArray(this.company.skills);
    }

    private get hasRoles() {
        return Array.isArray(this.company.roles);
    }
}
</script>
