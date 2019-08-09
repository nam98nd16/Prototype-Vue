<template>
    <div style="color:white">
        <b-navbar fixed="top" toggleable="lg" style="background-color:#00008B">
            <b-navbar-nav >

                <div style="position:relative; top:6.5px">
                    <v-icon name="calendar-alt" fixed="bottom"/>
                </div>
                <b-nav-item-dropdown text="Daily Report">
                    <b-dropdown-item href="#">test</b-dropdown-item>
                </b-nav-item-dropdown>
                <div><span style="display:inline-block; width: 10px;"></span></div>

                <div style="position:relative; top:6.5px">
                    <v-icon name="cubes" fixed="bottom"/>
                </div>
                <b-nav-item-dropdown text="Company Management">
                    <b-dropdown-item href="#">test</b-dropdown-item>
                </b-nav-item-dropdown>
                <div><span style="display:inline-block; width: 10px;"></span></div>

                <div style="position:relative; top:6.5px">
                    <v-icon name="chart-bar" fixed="bottom"/>
                </div>
                <b-nav-item-dropdown text="Report">
                    <b-dropdown-item href="#">test</b-dropdown-item>
                </b-nav-item-dropdown>
                <div><span style="display:inline-block; width: 10px;"></span></div>

                <div style="position:relative; top:6.5px">
                    <v-icon name="retweet" fixed="bottom"/>
                </div>
                <b-nav-item-dropdown text="My Menu">
                    <b-dropdown-item href="#">test</b-dropdown-item>
                </b-nav-item-dropdown>
                <div><span style="display:inline-block; width: 10px;"></span></div>

                <div style="position:relative; top:6.5px">
                    <v-icon name="regular/newspaper" fixed="bottom"/>
                </div>
                <b-nav-item-dropdown text="Manager Menu">
                    <b-dropdown-item href="#">test</b-dropdown-item>
                </b-nav-item-dropdown>
                <div><span style="display:inline-block; width: 10px;"></span></div>

                <b-button variant="primary" style="font-weight: 550"><span style="font-weight:bolder">+</span>Register</b-button>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-button variant="primary" style="font-weight: 550">Back to Dashboard</b-button>

                <div><span style="display:inline-block; width: 10px;"></span></div>

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

<style>
   .navbar-light .navbar-nav .nav-link{
      color:white;
      font-weight: bold
    }
 </style>