export const getDescAbility = async (url) => {
    const response = await fetch(`${url}`)
    const data = await response.json()
    const id = url.slice(34, -1)
    let desc = ''

    if (id <= 233) {
        
        for (let i = 0; i < data.effect_entries.length; i++) {
            const element = data.effect_entries[i];
            if (element.language.name == 'en') {
                desc = element.short_effect
            }
        }
    } else {
        for (let i = 0; i < data.flavor_text_entries.length; i++) {
            const element = data.flavor_text_entries[i];
            if (element.language.name == 'en') {
                desc = element.flavor_text   
            }
        }

    }
    return desc
}