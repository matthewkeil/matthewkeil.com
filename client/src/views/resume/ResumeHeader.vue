<template>
    <header>
        <h1>Matthew Keil</h1>
        <h2>{{ currentTitle() }}</h2>
        <div class="row">
            <span>Miami, FL</span>
            <span>+1-954-734-4691</span>
        </div>
        <div class="row">
            <a href="https://github.com/matthewkeil">
                <img src="/github.svg" alt="github" height="20px" />
            </a>
            <a href="https://www.linkedin.com/in/matthew-keil">
                <img
                    style="margin-right: -5px;"
                    src="/linkedin.png"
                    alt="LinkedIn"
                    height="20px"
                />
            </a>
            <a href="mailto:me@matthewkeil.com">
                <img src="/email.png" alt="email" height="20px" />
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
}

h2 {
    @include header-text;
    line-height: 1;
    padding-bottom: 0.2rem;
}

.row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 0.3rem;
}

.row > * {
    text-align: center;
    padding-left: 2rem;
}

.row > *:first-child {
    padding-left: 0;
}

@media print {
    a::after {
        content: attr(href);
        display: block;
        font-size: 0.7rem;
    }

    a:last-of-type::after {
        transform: translate(-0.5rem);
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
    currentTitle() {
        const [currentCompany] = resumeService.companies;
        return currentCompany.roles
            ? currentCompany.roles[0].role
            : currentCompany.name;
    }
}
</script>
