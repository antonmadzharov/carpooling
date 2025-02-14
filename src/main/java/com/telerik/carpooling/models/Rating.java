package com.telerik.carpooling.models;

import com.telerik.carpooling.models.base.MappedAudibleBase;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Range;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Rating extends MappedAudibleBase {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user",nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ratedUser",nullable = false)
    private User ratedUser;

    @Range(min=1,max = 5)
    private Integer rating;

    private boolean isDriver;

}
