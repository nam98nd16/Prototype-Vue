<template>
    <div>
        <b-navbar fixed="top" toggleable="lg" type="dark" variant="secondary">
            <b-navbar-nav >

                <div style="position:relative; top:6.5px">
                    <v-icon name="calendar-alt" fixed="bottom"/>
                </div>
                <b-nav-item-dropdown text="Daily Report">
                    <b-dropdown-item href="#">test</b-dropdown-item>
                </b-nav-item-dropdown>

                <div style="position:relative; top:6.5px">
                    <v-icon name="cubes" fixed="bottom"/>
                </div>
                <b-nav-item-dropdown text="Company Management">
                    <b-dropdown-item href="#">test</b-dropdown-item>
                </b-nav-item-dropdown>

                <div style="position:relative; top:6.5px">
                    <v-icon name="chart-bar" fixed="bottom"/>
                </div>
                <b-nav-item-dropdown text="Report">
                    <b-dropdown-item href="#">test</b-dropdown-item>
                </b-nav-item-dropdown>

                <div style="position:relative; top:6.5px">
                    <v-icon name="recycle" fixed="bottom"/>
                </div>
                <b-nav-item-dropdown text="My Menu">
                    <b-dropdown-item href="#">test</b-dropdown-item>
                </b-nav-item-dropdown>

                <div style="position:relative; top:6.5px">
                    <v-icon name="newspaper" fixed="bottom"/>
                </div>
                <b-nav-item-dropdown text="Manager Menu">
                    <b-dropdown-item href="#">test</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-button variant="info"><span style="font-weight:900">+</span>Register</b-button>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-button variant="info">Back to Dashboard</b-button>

                <div>
                    <span style="display:inline-block; width: 10px;"></span>
                </div>

                <div style="position:relative; top:6.5px">
                    <v-icon name="bell" fixed="bottom"/>
                </div>

                <b-nav-item-dropdown text="Username">
                    <b-dropdown-item href="#">test</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        methods: {

        }
    }
</script>