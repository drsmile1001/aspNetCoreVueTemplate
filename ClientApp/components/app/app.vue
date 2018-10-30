<template>
    <v-app>
            <v-navigation-drawer fixed
                                 v-model="drawer"
                                 app>
                <v-list dense>
                    <v-list-tile v-for="(item,idx) in $router.options.routes"
                                 :key="idx"
                                 :to="item.path"
                                 ripple
                                 >
                        <v-list-tile-action />
                        <v-list-tile-content>
                            <v-list-tile-title>{{item.name}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            <v-toolbar color="indigo"
                       dark
                       fixed
                       app>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title>Title</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-content>
                <v-container>
                    <router-view></router-view>
                </v-container>
            </v-content>
        </v-app>
</template>

<script>
export default {
    data: () => ({
        drawer: null
    }),
}
</script>

<style>

</style>
