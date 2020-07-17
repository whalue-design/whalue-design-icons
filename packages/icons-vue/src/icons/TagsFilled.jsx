// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import TagsFilledSvg from '@whalue-design/icons-svg/lib/asn/TagsFilled';

export default {
  name: 'IconTagsFilled',
  displayName: 'TagsFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TagsFilledSvg } },
      children,
    ),
};