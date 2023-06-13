use anchor_lang::prelude::*;

declare_id!("2DGkbVKhZsSjmygWkPhfJDYdDwmDKy7wHfKVaNgPdu3e");

#[program]
pub mod renec_dapp_template {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
