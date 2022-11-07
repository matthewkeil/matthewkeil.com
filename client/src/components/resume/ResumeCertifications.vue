<template>
    <section class="main-section certs">
        <h2>Certifications</h2>
        <div class="main-content">
            <ul class="certifications">
                <li
                    v-for="({ name, imgSrc, url }, key) in this.certifications"
                    :key="key"
                >
                    <a :href="url" class="certification">
                        <img :src="imgSrc" />
                        <span class="pre-formatted">{{ name }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "./resumeStyles";
.certifications {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-left: 1rem;
    padding-top: 0.1rem;
    margin-bottom: -0.2rem;
}

.certification {
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
}

.certification span {
    padding: 0.4rem;
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 0.7rem;
}

.certification img {
    width: 4rem;
    height: 4rem;
}

.pre-formatted {
    white-space: pre;
}

@media screen and (max-width: 810px) {
    p {
        text-align: center;
    }
}

@media screen and (max-width: 480px) {
    .certifications {
        padding-left: 0;
    }
    .certification {
        flex-direction: column;
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
