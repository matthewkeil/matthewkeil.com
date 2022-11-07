<template>
    <div class="company">
        <h4 class="company-name">{{ this.company.name }}</h4>

        <ul :v-if="hasSkills" :class="{ 'skills': hasSkills }">
            <li v-for="(skill, key) in this.company.skills" :key="key">
                <h6>{{ skill }}</h6>
            </li>
        </ul>

        <ul :v-if="hasRoles" :class="{ 'roles': hasRoles }">
            <li
                v-for="({ role, date, description, skills }, key) in this
                    .company.roles"
                :key="key"
                class="role"
            >
                <h5 :class="{ 'with-floated-span': !description }">
                    {{ role }}
                    <span v-if="!description"
                        ><h6>{{ date }}</h6></span
                    >
                </h5>

                <h6 v-if="description" class="with-floated-span">
                    {{ description }}
                    <span>{{ date }}</span>
                </h6>

                <ul
                    :v-if="Array.isArray(skills) && skills.length"
                    class="list-with-bullets"
                >
                    <li v-for="(skill, key) in skills" :key="key">
                        {{ skill }}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import "./resumeStyles";

.with-floated-span {
    display: flex;
}

.with-floated-span span {
    text-align: right;
    flex-grow: 1;
    align-self: flex-end;
}

.company {
    position: relative;

    h4 {
        padding-bottom: 0.2rem;
    }

    .role {
        padding-bottom: 0.5rem;
        &:last-of-type {
            padding-bottom: 0;
        }
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
