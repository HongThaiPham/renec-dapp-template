use anchor_lang::prelude::*;

use crate::NumberBucket;

#[derive(Accounts)]
pub struct InitNumber<'info> {
    #[account(init_if_needed,
        seeds = [b"number".as_ref(), authority.key.as_ref()],
        bump,
        payer = authority,
        space = NumberBucket::LEN,
    )]
    pub number: Account<'info, NumberBucket>,
    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,

    pub rent: Sysvar<'info, Rent>,
}

pub fn init(ctx: Context<InitNumber>) -> Result<()> {
    let number = &mut ctx.accounts.number;
    number.data = 0;
    msg!("Initialized number bucket");
    Ok(())
}