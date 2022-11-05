"""empty message

Revision ID: 883c9e06c311
Revises: b1d33d12a143
Create Date: 2022-11-05 01:01:19.392514

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '883c9e06c311'
down_revision = 'b1d33d12a143'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('restaurant', 'rest_image',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=300),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('restaurant', 'rest_image',
               existing_type=sa.String(length=300),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
    # ### end Alembic commands ###