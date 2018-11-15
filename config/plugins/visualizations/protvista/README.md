# Prototype BioJS port of ProtVista to Galaxy

This is a prototypal port of a biojs tool to see required steps to galaxify a biojs tool.

Current notes (needs to be automated)

1. create folder, e.g. /$GALAXY_ROOT/config/plugins/visualizations/$FOLDERNAME
2. Migrate package.json to the root of your folder.
3. Copy all built files to /static
    - right now biojs doesn't enforce built js links. This needs to become mandatory
4. copy an example snippet (WHERE?) and build template. <-- more details required
5. ??
6. Profit.
