use anchor_lang::prelude::*;

use crate::constants::*;

#[account]
pub struct NumberBucket {
    pub data: u64,
}

#[account]
pub struct StringBucket {
    pub data: String,
}

impl NumberBucket {
    pub const LEN: usize = DISCRIMINATOR_SIZE + U64_SIZE;
}

impl StringBucket {
    pub const LEN: usize = DISCRIMINATOR_SIZE + STRING_PREFIX_SIZE + 100; // 100 chars
}
