<template>
    <v-card flat>
        <v-card-text>
            <v-data-table fixed-header :headers="headers" :items="items">
                <template #item.action>
                    <v-btn fab icon color="orange">
                        <v-icon>
                            mdi-pencil
                        </v-icon>
                    </v-btn>
                    <v-btn icon flab color="red">
                        <v-icon>
                            mdi-delete
                        </v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'Categories',
    data() {
        return {
            items: [
                {
                    id: 0,
                    name: 'Test'
                }
            ],
            headers: [
                {
                    text: 'Nom',
                    value: 'name'
                },
                {
                    text: '',
                    value: 'action',
                    sortable: false,
                    width: '20%'
                }
            ]
        }
    }
}
</script>

<style>

</style>