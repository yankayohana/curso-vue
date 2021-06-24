<template>
    <nav class="menu">
        <ul>
            <router-link to="/" tag="li" exact-active-class="active" > <!--- exact ou exact-active-class garante que só estará ativo quando for exatamente '/' --->
                <a>Início</a>
            </router-link>
            <router-link to="/usuarios" tag="li" active-class="active">
                <a>Usuários </a>
            </router-link>
         </ul>
    </nav>      
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>