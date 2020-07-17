// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import TagsOutlinedSvg from '@whalue-design/icons-svg/lib/asn/TagsOutlined';

export default {
  name: 'IconTagsOutlined',
  displayName: 'TagsOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TagsOutlinedSvg } },
      children,
    ),
};