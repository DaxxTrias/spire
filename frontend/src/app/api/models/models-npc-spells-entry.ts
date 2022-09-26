import { ModelsSpellsNew } from './models-spells-new';
export interface ModelsNpcSpellsEntry {
    id?: number;
    manacost?: number;
    max_hp?: number;
    maxlevel?: number;
    min_hp?: number;
    minlevel?: number;
    npc_spells_id?: number;
    priority?: number;
    recast_delay?: number;
    resist_adjust?: number;
    spellid?: number;
    spells_new?: ModelsSpellsNew;
    type?: number;
}
