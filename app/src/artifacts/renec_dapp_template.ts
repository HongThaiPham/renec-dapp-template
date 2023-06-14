export type RenecDappTemplate = {
  "version": "0.1.0",
  "name": "renec_dapp_template",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [],
      "args": []
    },
    {
      "name": "increaseNumber",
      "accounts": [
        {
          "name": "number",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "number",
          "type": "u64"
        }
      ]
    },
    {
      "name": "decreaseNumber",
      "accounts": [
        {
          "name": "number",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "number",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeNumberBucket",
      "accounts": [
        {
          "name": "number",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "numberBucket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "data",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "stringBucket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "data",
            "type": "string"
          }
        ]
      }
    }
  ]
};

export const IDL: RenecDappTemplate = {
  "version": "0.1.0",
  "name": "renec_dapp_template",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [],
      "args": []
    },
    {
      "name": "increaseNumber",
      "accounts": [
        {
          "name": "number",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "number",
          "type": "u64"
        }
      ]
    },
    {
      "name": "decreaseNumber",
      "accounts": [
        {
          "name": "number",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "number",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeNumberBucket",
      "accounts": [
        {
          "name": "number",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "numberBucket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "data",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "stringBucket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "data",
            "type": "string"
          }
        ]
      }
    }
  ]
};
