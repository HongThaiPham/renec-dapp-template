use anchor_lang::prelude::*;

use crate::NumberBucket;

#[derive(Accounts)]
pub struct IncreaseNumber<'info> {
    #[account(mut,
        seeds = [b"number".as_ref(), authority.key.as_ref()],
        bump,
    )]
    pub number: Account<'info, NumberBucket>,
    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,

    pub rent: Sysvar<'info, Rent>,
}

pub fn increase(ctx: Context<IncreaseNumber>, amount: u64) -> Result<()> {
    let number = &mut ctx.accounts.number;
    number.data += amount;
    msg!("Increased number bucket by {}", amount);
    Ok(())
}
