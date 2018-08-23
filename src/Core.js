export default class Core
{
    static load(config = null)
    {
        if (!config) return false;
        if (config.hasOwnProperty('author')) {
            return true;
        }
    }
}