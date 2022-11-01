<template>
    <div>
        <h1>Chats</h1>
        <aside>
            <div v-for="chat in chats" :key="chat.id">
                <router-link :to="`/chats/${chat.id}`">
                    {{ chat.name }}
                </router-link>
            </div>
        </aside>
        <article>
            <pre>
                chatId: {{ this.$route.params.id }}
            </pre>
            <router-view />
        </article>
    </div>
</template>

<script setup>
    const chats = [
        {id: 1, name: 'Ximena'},
        {id: 2, name: 'Pedro'},
        {id: 3, name: 'María'},
        {id: 4, name: 'Camila'},
        {id: 5, name: 'Juanito'},
    ];
</script>
