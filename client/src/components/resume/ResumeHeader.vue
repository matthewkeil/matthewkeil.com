<template>
    <header>
        <h1>Matthew Keil</h1>
        <h2>{{ currentTitle }}</h2>
        <div class="row">
            <span>Miami, FL</span>
            <span>+1-954-734-4691</span>
        </div>
        <div class="row socials">
            <a href="https://github.com/matthewkeil">
                <img :src="githubImage" alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/matthew-keil">
                <img :src="linkedInImage" alt="LinkedIn" />
            </a>
            <a href="mailto:me@matthewkeil.com">
                <img :src="emailImage" alt="email" />
            </a>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import "./resumeStyles";

header {
    width: 100%;
    padding-bottom: 0.5rem;
    text-align: center;
    color: rgb(15, 36, 62);
}

h1 {
    font-weight: bold;
    font-size: 3rem;
    line-height: 0.8;
    padding-bottom: 0.2rem;
}

h2 {
    @include header-text;
    line-height: 1;
    padding-bottom: 0.3rem;
}

$image-height: 20px;

img {
    height: $image-height;
}

.row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.row:first-of-type {
    padding-bottom: 0.6rem;
}

.row > * {
    text-align: center;
    padding-left: 2rem;
}

.row > *:first-child {
    padding-left: 0;
}

@media print {
    .socials > * {
        flex: 1 1 auto;
        padding-bottom: 0.3rem;
    }

    a {
        position: relative;
        &::after {
            position: absolute;
            content: attr(href);
            font-size: 0.65rem;
            white-space: nowrap;
            text-decoration: none;
            transform: translate(-60%, $image-height + 3px);
        }

        // &:nth-of-type(2)::after {
        //     transform: translate(-65%, -110%);
        // }
    }
}

@media screen and (max-width: 480px) {
    header {
        padding-left: 5vw;
        padding-right: 5vw;

        h1 {
            font-size: 2.5rem;
        }

        h2 {
            font-size: 1.5rem;
        }
    }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { resumeService } from "./resumeService";

@Component
export default class ResumeHeader extends Vue {
    get currentTitle() {
        const [currentCompany] = resumeService.companies;
        return currentCompany.roles
            ? currentCompany.roles[0].role
            : currentCompany.name;
    }

    get githubImage() {
        return require("../../assets/resume/github.svg");
    }

    get linkedInImage() {
        return require("../../assets/resume/linkedin.png");
    }

    get emailImage() {
        return require("../../assets/resume/email.png");
    }
}
</script>
