<script lang="ts">
import { Router, Link, Route } from "svelte-routing";

const User = () => import('../pages/User/User.svelte')
const UserList = () => import('../pages/Users/Users.svelte')


export let baseUrl :string;
</script>

<Router basepath={baseUrl} >
  <div>
    <Route path="/:userId" component={User} />
    <Route path="/" component={UserList} />
  </div>
</Router>

