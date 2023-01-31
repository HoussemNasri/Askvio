package net.askvio.model;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class VoteTypeConverter implements AttributeConverter<VoteType, Integer> {
    @Override
    public Integer convertToDatabaseColumn(VoteType voteType) {
        return voteType.getValue();
    }

    @Override
    public VoteType convertToEntityAttribute(Integer voteTypeValue) {
        return VoteType.fromValue(voteTypeValue);
    }
}
