use anchor_lang::prelude::*;
pub mod constants;

pub mod schemas;
pub use schemas::*;

pub mod instructions;
pub use instructions::*;

declare_id!("2DGkbVKhZsSjmygWkPhfJDYdDwmDKy7wHfKVaNgPdu3e");

#[program]
pub mod renec_dapp_template {
    use super::*;

    pub fn initialize(_ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }

    pub fn increase_number(ctx: Context<IncreaseNumber>, number: u64) -> Result<()> {
        instructions::increase_number::handler(ctx, number)
    }

    pub fn decrease_number(ctx: Context<DecreaseNumber>, number: u64) -> Result<()> {
        instructions::decrease_number::handler(ctx, number)
    }
}

#[derive(Accounts)]
pub struct Initialize {}
