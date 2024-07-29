---
layout: post
tag: vuetify
---
***
<br>
[출처-vuetify공홈](https://vuetifyjs.com/en/components/expansion-panels/#usage)
<br>

## 정의

v-expansion-panel component는 많은 양의 정보인 수직공간을 줄이는데 사용된다

```
<v-expansion-panel>
  <v-expansion-panel-title v-slot="{ open }">
    <v-row no-gutters>
      <v-col class="d-flex justify-start" cols="4">
        Start and end dates
      </v-col>
      <v-col
        class="text--secondary"
        cols="8"
      >
        <v-fade-transition leave-absolute>
          <span v-if="open">When do you want to travel?</span>
          <v-row
            v-else
            style="width: 100%"
            no-gutters
          >
            <v-col class="d-flex justify-start" cols="6">
            Start date: {{ trip.start || 'Not set' }}
            </v-col>
            <v-col class="d-flex justify-start" cols="6">
              End date: {{ trip.end || 'Not set' }}
            </v-col>
          </v-row>
        </v-fade-transition>
      </v-col>
    </v-row>
  </v-expansion-panel-title>
  <v-expansion-panel-text>
    <v-row
      justify="space-around"
      no-gutters
    >
      <v-col cols="3">
        <v-text-field
          v-model="trip.start"
          label="Start date"
          type="date"
        ></v-text-field>
      </v-col>

      <v-col cols="3">
        <v-text-field
          v-model="trip.end"
          label="End date"
          type="date"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-expansion-panel-text>
</v-expansion-panel>
```