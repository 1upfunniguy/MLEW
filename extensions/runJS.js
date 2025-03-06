(function(Scratch) {
  'use strict';

  class JavaScriptCommand {
    getInfo () {
      return {
        id: 'SJS',
        name: 'JavaScript',
        blocks: [
          {
            opcode: 'run',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Run JavaScript [code]',
            arguments: {
              code: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'console.log("Hello, world!");'
              }
            }
          }
        ]
      };
    }

    run (args, util) {
      const code = args.code;
      try {
        eval(code);
      } catch (error) {
        console.error(error);
      }
    }
  }

  Scratch.extensions.register(new JavaScriptCommand());
})(Scratch);
