<template>
    <section class="main-section certs">
        <h2>Certifications</h2>
        <ul class="certifications">
            <li
                v-for="({ name, imgSrc, url }, key) in this.certifications"
                :key="key"
            >
                <a :href="url" class="certification">
                    <img :src="imgSrc" />
                    <span>{{ name }}</span>
                </a>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
@import "./resumeStyles";
.certifications {
    display: flex;
    flex-direction: row;
    height: 5rem;
    padding-left: 1rem;
}

.certification {
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
}

.certification span {
    padding: 0.3rem;
    display: flex;
    align-items: center;
    font-size: 0.7rem;
}

.certification img {
    width: 4rem;
    height: 4rem;
}

@media screen and (max-width: 810px) {
    p {
        text-align: center;
    }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { resumeService } from "./resumeService";

@Component
export default class ResumeCertifications extends Vue {
    public certifications = resumeService.certifications;
}
</script>
