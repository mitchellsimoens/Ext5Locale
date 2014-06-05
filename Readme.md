# This is a proof of concept app that displays simple automatic locale based on teh string provided to components.

I have not tested performance nor have I thought of other user's use cases. This was a thought I had, am using this in a new Ext 5 app and is working quite well for me.

## How this works

In a component you can specify the string surrounded with curly braces, one for the locale key and another for default text. Here is an example of a button config:

    {
        xtype : 'button',
        text  : '{some-key}{Default Text}'
    }
    
This will lookup the locale string using the `some-key` key. If one does not exist then it will use teh `Default Text`.

This is the same for other configs like html, fieldLabel, boxLabel, text on a grid column, etc. The way the strings get swapped is from overrides. In the i18n package there are overrides in the overrides directory. The overrides call the `locale` method of the `i18n` class which will run a regular expression to match if the string is in the proper format with two sets of curly braces. If it's not then it simply returns that string. If it does match then it will do the lookup.

If the key does not exist, it has logic to execute the `save` method on the `i18n` class which would allow you to send a request to the server to save it. I call this auto-healing.
