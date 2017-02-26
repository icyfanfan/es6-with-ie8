import Regular from 'regularjs';

const tpl = `
    {#if active}
        <span>{children}</span>
    {#else}
        <a href="#"
        on-click={this.onClick($event)}
        >
        {children}
        </a>
    {/if}
`

module.exports = Regular.extend({
    template: tpl,
    name: 'Link',
    config: function(){
        
    },
    onClick: function(e){
        e.preventDefault();
        this.$emit('linkClick');
    }
})