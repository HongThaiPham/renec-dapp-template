use anchor_lang::prelude::*;

use crate::NumberBucket;

#[derive(Accounts)]
pub struct DecreaseNumber<'info> {
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

pub fn decrease(ctx: Context<DecreaseNumber>, amount: u64) -> Result<()> {
    let number = &mut ctx.accounts.number;
    number.data -= amount;
    msg!("Decreased number bucket by {}", amount);
    Ok(())
}
