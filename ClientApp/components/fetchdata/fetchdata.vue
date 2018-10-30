<template>
    <div>
        <h1>Weather forecast</h1>

        <p>This component demonstrates fetching data from the server.</p>

        <v-data-table :headers="headers"
                      :items="forecasts"
                      hide-actions
                      class="elevation-1">
            <template slot="items"
                      slot-scope="props">
                <td>{{ props.item.dateFormatted }}</td>
                <td class="text-xs-right">{{ props.item.temperatureC }}</td>
                <td class="text-xs-right">{{ props.item.temperatureF }}</td>
                <td class="text-xs-right">{{ props.item.summary }}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data: () => ({
        headers: [
            { text: "Date", value: "dateFormatted" },
            { text: "Temp. (C)", value: "temperatureC" },
            { text: "Temp. (F)", value: "temperatureF" },
            { text: "Summary", value: "summary" }
        ],
        forecasts: []
    }),
    mounted() {
        axios.get("api/SampleData/WeatherForecasts").then(response => {
            this.forecasts = response.data;
        });
    }
};
</script>

