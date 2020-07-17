// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import LikeFilledSvg from '@whalue-design/icons-svg/lib/asn/LikeFilled';

export default {
  name: 'IconLikeFilled',
  displayName: 'LikeFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LikeFilledSvg } },
      children,
    ),
};