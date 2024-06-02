<script setup>
import { ref, watch, computed, onMounted } from "vue";
import achivements from "@/database/achievements.json";
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import AchievementCard from "@/components/AchievementCard.vue";

const achieved = ref(true);
const inProgress = ref(true);
const todo = ref(true);
const filter = ref(['achieved', 'in-progress', 'todo']);
const percent = ref(0);

onMounted(() => {
    const totalAchievements = achivements.length;
    const achievedAchievements = achivements.filter((achievement) => achievement.status === "achieved").length;
    percent.value = Math.round((achievedAchievements / totalAchievements) * 100);
});

watch([achieved, inProgress, todo], () => {
    filter.value = [];
    if (achieved.value) filter.value.push("achieved");
    if (inProgress.value) filter.value.push("in-progress");
    if (todo.value) filter.value.push("todo");
});

const filteredAchievements = computed(() => {
    return achivements
        .filter((achievement) => {
            return filter.value.includes(achievement.status);
        })
        .sort((a, b) => {
            if (!a.achieved_at) return 1;
            if (!b.achieved_at) return -1;
            return new Date(b.achieved_at) - new Date(a.achieved_at);
        });
});

</script>

<template>
    <div class="achievements-view-container">
        <h2>ACHIEVEMENTS</h2>
        <div class="achievements-container">
            <div class="stats-container">
                <div class="stats-achieved">
                   <CircleProgress class="circle-progress" fill-color="var(--red-primary)" :percent="percent" show-percent="true" empty-color="transparent"/>
                   <p>PROGRESS</p>
                </div>
                <p class="text">I HAVE CREATED A SET OF ACHIEVEMENTS FOR MYSELF AND I USE THIS PAGE TO TRACK THEM.</p>
            </div>
            <div class="achievements">
                <AchievementCard v-for="achievement in filteredAchievements" :key="achievement.id" :achievement="achievement"/>
            </div>
            <div class="filters-container">
                <div>
                    <input type="checkbox" name="achieved" id="achieved" v-model="achieved">
                    <label for="achieved">ACHIEVED</label>
                </div>
                <div>
                    <input type="checkbox" name="in-progress" id="in-progress" v-model="inProgress">
                    <label for="in-progress">IN PROGRESS</label>
                </div>
                <div>
                    <input type="checkbox" name="todo" id="todo" v-model="todo">
                    <label for="todo">TO-DO</label>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.achievements-view-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 18px;
        margin: 20px 0;
    }

    .achievements-container {
        height: 100%;
        display: flex;
        justify-content: center;
    
        .stats-container {
            width: 160px;
            margin-top: 40px;
            margin-right: 20px;
    
            .text {
                color: var(--grey-middle);
                font-size: 14px;
                margin-top: 10px;
            }
    
            .stats-achieved {
                width: 160px;
                height: 145px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                border: 1px solid var(--grey-lower);
    
                .circle-progress {
                    width: 90px !important;
                    height: 90px !important;
    
                    .current-counter {
    
                        &::after {
                            content: "%";
                        }
                    }
                }
    
                p {
                    margin-top: 10px;
                    color: var(--grey-primary);
                    letter-spacing: 1px;
                    font-size: 14px;
                }
            }
        }
    
        .achievements {
            width: 470px;
        }
    
        .filters-container {
            width: 110px;
            margin-left: 20px;

            input[type="checkbox"] {
                display: none;

                & + label {
                    position: relative;
                    padding-left: 25px;
                    cursor: pointer;
                }

                & + label:before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 15px;
                    height: 15px;
                    border: 1px solid var(--red-primary);
                    background-color: transparent;
                }

                &:checked + label:before {
                    background-color: var(--red-primary);
                    background-clip: content-box;
                    padding: 2px;
                    border: 1px solid var(--red-primary);
                }
            }

            label {
                font-size: 14px;
                color: var(--red-primary);
                user-select: none;
            }
        }
    }
}
</style>