use anchor_lang::prelude::*;
pub mod constants;

pub mod schemas;
pub use schemas::*;

pub mod instructions;
pub use instructions::*;

declare_id!("6wBc9H72HZfydu1xUhrB3JTD7WYbN1XLEJ73M1nLDoPk");

#[program]
pub mod renec_dapp_template {
    use super::*;

    pub fn initialize(_ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }

    pub fn increase_number(ctx: Context<IncreaseNumber>, number: u64) -> Result<()> {
        instructions::buckets::increase_number::increase(ctx, number)
    }

    pub fn decrease_number(ctx: Context<DecreaseNumber>, number: u64) -> Result<()> {
        instructions::buckets::decrease_number::decrease(ctx, number)
    }

    pub fn initialize_number_bucket(ctx: Context<InitNumber>) -> Result<()> {
        instructions::buckets::init_number::init(ctx)
    }
}

#[derive(Accounts)]
pub struct Initialize {}
